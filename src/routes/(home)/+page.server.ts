import { compileConfig } from '$lib/server/config';
import type { FeaturedProject, HomepageConfig } from '$lib/types';

export const load = async () => {
	const featuredProjects: Record<string, FeaturedProject> = await compileConfig<
		Record<string, FeaturedProject>
	>('config/featured_projects.toml');

	const homepageConfig: HomepageConfig =
		await compileConfig<HomepageConfig>('config/homepage.toml');

	return {
		featuredProjects,
		homepageConfig
	};
};
