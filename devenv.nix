{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: let
  resumeRoot = "${config.git.root}/resume";
  bucketRegion = "tor1";
  bucketName = "robertbabaev-tech";
  resumeName = "Robert_Babaev_resume";
  domain = "robertbabaev.tech";
in {
  # https://devenv.sh/basics/
  env = {
    GREET = "devenv";
    DO_SPACES_REGION = bucketRegion;
    DO_SPACES_BUCKET = bucketName;
    PUBLIC_DEV_RESUME = "https://${bucketName}.${bucketRegion}.digitaloceanspaces.com/resumes/dev/${resumeName}.pdf";
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
    gnumake

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

        ${lib.getExe pkgs.typst} compile --root . ${resumeRoot}/dev/Robert_Babaev_resume.typ
      '';
    };
    check-fonts = {
      exec = ''
        tree ${pkgs.source-sans-pro}
        tree ${pkgs.source-sans}
        tree ${pkgs.font-awesome_6}
      '';
      description = "\tCheck the installation directories of the fonts installed";
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
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
