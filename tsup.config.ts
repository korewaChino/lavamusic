import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	entry: ["src/**/*.ts"],
	format: "cjs",
	dts: false,
	clean: true,
	bundle: false,
	splitting: false,
	sourcemap: false,
	shims: false,
	keepNames: true,
	skipNodeModulesBundle: true,
	...options,
}));
