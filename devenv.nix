{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  cachix.pull = [
    "rbabaev"
  ];

  # https://devenv.sh/packages/
  packages = with pkgs; [
    act
    git
    gnumake

    # fonts
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
        "${pkgs.source-sans-pro}/share/fonts/truetype"
        "${pkgs.source-sans}/share/fonts/truetype"
        "${pkgs.font-awesome_6}/share/fonts/truetype"
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

        cd ${config.git.root}/resume

        ${lib.getExe pkgs.typst} compile ${config.git.root}/dev/Robert_Babaev_resume.typ
      '';
    };
    check-fonts = {
      exec = ''
        ls ${pkgs.source-sans-pro}/share
        ls ${pkgs.source-sans}/share
        ls ${pkgs.font-awesome_6}/share
      '';
    };
  };

  # https://devenv.sh/basics/
  enterShell = ''
    git --version # Use packages
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
