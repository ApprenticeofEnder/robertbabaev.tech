import { compileConfig, fetchRssFeed } from '$lib/server';
import type { FeaturedProject, HomepageConfig, RssFeedItem } from '$lib/types';

export const load = async () => {
	const featuredProjects: Record<string, FeaturedProject> = await compileConfig<
		Record<string, FeaturedProject>
	>('config/featured_projects.toml');

	const homepageConfig: HomepageConfig =
		await compileConfig<HomepageConfig>('config/homepage.toml');

	console.log(homepageConfig);

	const feeds: (RssFeedItem[] | null)[] = await Promise.all(
		homepageConfig.rss.map(async (rssUrl) => {
			return await fetchRssFeed(rssUrl);
		})
	);

	const blogPosts = feeds.filter((feedItems) => !!feedItems).flat(1);

	return {
		featuredProjects,
		homepageConfig,
		blogPosts
	};
};
