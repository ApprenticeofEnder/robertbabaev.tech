{
  pkgs,
  lib,
  config,
  ...
}: let
  resumeRoot = "${config.git.root}/resume";
  bucketRegion = "tor1";
  bucketName = "robertbabaev-tech";
  bucketBaseUrl = "https://${bucketName}.${bucketRegion}.digitaloceanspaces.com";
  resumeName = "Robert_Babaev_resume";
  domain = "robertbabaev.tech";
  secretsFile = ".secrets";
in {
  # https://devenv.sh/basics/
  name = "robertbabaev.tech";

  env = {
    GREET = "devenv";
    DO_SPACES_REGION = bucketRegion;
    DO_SPACES_BUCKET = bucketName;
    PUBLIC_DEV_RESUME = "${bucketBaseUrl}/resumes/dev/${resumeName}.pdf";
    PUBLIC_DEVOPS_RESUME = "${bucketBaseUrl}/resumes/devops/${resumeName}.pdf";
    PUBLIC_SECURITY_RESUME = "${bucketBaseUrl}/resumes/security/${resumeName}.pdf";
    PUBLIC_URL_ORIGIN = "https://${domain}";
  };

  cachix.pull = [
    "rbabaev"
  ];

  # https://devenv.sh/packages/
  packages = with pkgs; [
    # keep-sorted start
    act
    awscli
    doctl
    entr
    git
    gnumake
    playwright
    playwright-test
    pulumi-esc
    tree
    # keep-sorted end

    # fonts
    roboto
    source-sans
    source-sans-pro
    font-awesome_6
  ];

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      pnpm = {
        enable = true;
      };
    };
    opentofu = {
      enable = true;
    };
    typescript = {
      enable = true;
    };
    typst = {
      enable = true;
      fontPaths = [
        "${pkgs.roboto}/share/fonts/truetype"
        "${pkgs.source-sans-pro}/share/fonts/truetype"
        "${pkgs.source-sans}/share/fonts/truetype"
        "${pkgs.font-awesome_6}/share/fonts/opentype"
      ];
    };
  };

  # https://devenv.sh/processes/
  # processes.dev.exec = "${lib.getExe pkgs.watchexec} -n -- ls -la";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  scripts = {
    generate-resume-data = {
      exec = ''
        cd ${config.git.root}
        ${lib.getExe pkgs.pnpm} generate-resume-data
      '';
      description = "\tGenerate Typst resume data from config/resume_data.toml";
    };
    compile-resume = {
      exec = ''
        set -euxo pipefail

        cd ${config.git.root}
        ${lib.getExe pkgs.pnpm} generate-resume-data

        cd ${resumeRoot}

        while IFS= read -r variant; do
          ${lib.getExe pkgs.typst} compile --root . ${resumeRoot}/$variant/${resumeName}.typ
        done < <(${config.git.root}/scripts/list_resume_variants.sh)
      '';
      description = "\tCompile resume files";
    };
    check-fonts = {
      exec = ''
        tree ${pkgs.source-sans-pro}
        tree ${pkgs.source-sans}
        tree ${pkgs.font-awesome_6}
      '';
      description = "\tCheck the installation directories of the fonts installed";
    };
    upload-resume = {
      exec = ''
        set -euo pipefail

        AWS_CLI=${lib.getExe pkgs.awscli}

        echo "Configuring AWS CLI..."

        $AWS_CLI configure set aws_access_key_id "$DO_SPACES_ACCESS_KEY"
        $AWS_CLI configure set aws_secret_access_key "$DO_SPACES_SECRET_KEY"
        $AWS_CLI configure set default.region "$DO_SPACES_REGION"

        echo "Uploading resume(s)..."

        while IFS= read -r variant; do
          $AWS_CLI s3 cp \
            "${resumeRoot}/$variant/${resumeName}.pdf" \
            "s3://$DO_SPACES_BUCKET/resumes/$variant" \
            --endpoint "https://${bucketRegion}.digitaloceanspaces.com" \
            --acl public-read
        done < <(${config.git.root}/scripts/list_resume_variants.sh)
      '';
      description = "\tUpload resume(s) to the DO Spaces bucket";
    };
  };

  # https://devenv.sh/basics/
  enterShell = ''
    git --version # Use packages
    typst --version
    echo pnpm $(pnpm --version)
    tofu --version
  '';

  # https://devenv.sh/tasks/
  tasks = {
    "secrets:populate".exec = ''
      if [ -z "''${GITHUB_ACTIONS:-}" ]; then
        rm ${secretsFile} || echo "No secrets file found."
        echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> ${secretsFile}
        echo "DO_SPACES_ACCESS_KEY=$DO_SPACES_ACCESS_KEY" >> ${secretsFile}
        echo "DO_SPACES_SECRET_KEY=$DO_SPACES_SECRET_KEY" >> ${secretsFile}
        echo "DO_TOKEN=$DO_TOKEN" >> ${secretsFile}
      fi
    '';
    "devenv:enterShell".after = ["secrets:populate"];
  };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  git-hooks.hooks = {
    actionlint.enable = true;
    alejandra.enable = true;
    convco.enable = true;
    deadnix.enable = true;
    detect-aws-credentials.enable = true;
    eslint.enable = true;
    keep-sorted.enable = true;
    prettier.enable = true;
    ripsecrets.enable = true;
    shellcheck.enable = true;
    taplo.enable = true;
    # zizmor.enable = true;
  };

  # See full reference at https://devenv.sh/reference/options/
}
