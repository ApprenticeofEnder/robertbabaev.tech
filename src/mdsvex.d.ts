declare module 'mdsvex' {
	interface CompileResponse {
		code: string;
	}
	function compile(src: string): Promise<CompileResponse>;
}
