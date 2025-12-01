{ pkgs, lib, config, inputs, ... }:
let
  resumeRoot = "${config.git.root}/resume";
  bucketRegion = "tor1";
  bucketName = "robertbabaev-tech";
  bucketBaseUrl = "https://${bucketName}.${bucketRegion}.digitaloceanspaces.com";
  resumeName = "Robert_Babaev_resume";
  domain = "robertbabaev.tech";
  envFile = ".env";
  secretsFile = ".secrets";
in
{
  # https://devenv.sh/basics/
  name = "robertbabaev.tech";

  env = {
    GREET = "devenv";
    DO_SPACES_REGION = bucketRegion;
    DO_SPACES_BUCKET = bucketName;
    PUBLIC_DEV_RESUME = "${bucketBaseUrl}/resumes/dev/${resumeName}.pdf";
    PUBLIC_URL_ORIGIN = "https://${domain}";
  };

  cachix.pull = [
    "rbabaev"
  ];

  # https://devenv.sh/packages/
  packages = with pkgs; [
    act
    git
    tree
    awscli
    gnumake
    pulumi-esc

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
        install.enable = true;
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
    compile-resume = {
      exec = ''
        set -euxo pipefail

        cd ${resumeRoot}

        ${lib.getExe pkgs.typst} compile --root . ${resumeRoot}/dev/${resumeName}.typ
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

        $AWS_CLI s3 cp \
          "${resumeRoot}/dev/${resumeName}.pdf" \
          "s3://$DO_SPACES_BUCKET/resumes/dev" \
          --endpoint "https://${bucketRegion}.digitaloceanspaces.com" \
          --acl public-read
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
      rm ${secretsFile} || echo "No secrets file found."
      echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> ${secretsFile}
      echo "DO_SPACES_ACCESS_KEY=$DO_SPACES_ACCESS_KEY" >> ${secretsFile}
      echo "DO_SPACES_SECRET_KEY=$DO_SPACES_SECRET_KEY" >> ${secretsFile}
      echo "DO_TOKEN=$DO_TOKEN" >> ${secretsFile}
    '';
    "devenv:enterShell".after = [ "secrets:populate" ];
  };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
