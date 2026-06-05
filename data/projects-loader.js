const projects = [];

function registerProject(project) {
  projects.push(project);
}

async function fetchGitHubStats(url) {
  try {
    const match = url.match(/github\.com[/:]([^/]+)\/([^/.]+)/);
    if (!match) return { stars: 0, forks: 0 };
    
    const [owner, repo] = match.slice(1);
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    
    if (!response.ok) return { stars: 0, forks: 0 };
    
    const data = await response.json();
    return { stars: data.stargazers_count || 0, forks: data.forks_count || 0 };
  } catch (e) {
    return { stars: 0, forks: 0 };
  }
}

async function loadGitHubStats() {
  const githubUrls = projects
    .filter(p => p.links?.github)
    .map(p => ({ id: p.id, url: p.links.github }));
  
  const stats = {};
  
  for (const { id, url } of githubUrls) {
    stats[id] = await fetchGitHubStats(url);
  }
  
  projects.forEach(p => {
    if (stats[p.id]) {
      p.stars = stats[p.id].stars;
      p.forks = stats[p.id].forks;
    }
  });
  
  window.dispatchEvent(new CustomEvent('github-stats-loaded'));
}
