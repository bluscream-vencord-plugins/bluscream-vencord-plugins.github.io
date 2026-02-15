export async function fetchPlugins() {
  try {
    const response = await fetch('https://api.github.com/users/bluscream-vencord-plugins/repos?per_page=100');
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    const data = await response.json();
    
    // Filter out non-plugin repositories
    // We assume any repo that isn't the github.io site or special meta repos is a plugin
    // You might want to refine this filter based on specific criteria (e.g., topics, naming convention)
    const plugins = data.filter(repo => {
        const name = repo.name.toLowerCase();
        return !name.includes('.github.io') && !name.startsWith('.');
    }).map(repo => ({
      name: repo.name,
      description: repo.description,
      default_branch: repo.default_branch,
      html_url: repo.html_url,
      clone_url: repo.clone_url
    }));

    return plugins;
  } catch (error) {
    console.error("Failed to fetch plugins:", error);
    return [];
  }
}

export async function fetchBranches(repoName) {
    try {
        const response = await fetch(`https://api.github.com/repos/bluscream-vencord-plugins/${repoName}/branches`);
        if (!response.ok) {
            // If we hit rate limit or error, return empty to fallback to default
            console.warn(`Failed to fetch branches for ${repoName}: ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        return data.map(b => b.name);
    } catch (error) {
        console.error(`Error fetching branches for ${repoName}:`, error);
        return [];
    }
}
