{
  description = "Dev environment";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable&shallow=1";
    systems.url = "github:nix-systems/default";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.systems.follows = "systems";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };

        # Development dependencies
        devPackages = with pkgs; [
          git
          nodejs
          pnpm
        ];

        # Environment variables
        env = {
          NODE_OPTIONS = "--openssl-legacy-provider";
        };
      in
      {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = devPackages;

          NODE_OPTIONS = "--openssl-legacy-provider";

          shellHook = ''
            echo "🎵 Lavamusic Development Environment"
            echo ""
            echo "🔧 Tools:"
            echo "  • node $(node --version)"
            echo "  • pnpm $(pnpm --version)"
            echo "  • Git $(git version | awk '{print $3}')"
            echo ""
            echo "💻 Development commands:"
            echo "  • pnpm install"
            echo "  • pnpm run dev"
            echo "  • pnpm run lint"
            echo "  • pnpm run format"
          '';
        };

        # Formatter for nix files
        formatter = pkgs.nixfmt-rfc-style;
      }
    );
}
