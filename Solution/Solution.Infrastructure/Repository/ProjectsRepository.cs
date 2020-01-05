using Newtonsoft.Json;
using Solution.Entities;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Linq;


namespace Solution.Infrastructure.Repository
{
    public class ProjectsRepository : IProjectsRepository
    {
        public async Task<List<ProjectDetails>> GetGithubProjectsDetailsAsync(string url)
        {
            List<ProjectDetails> projectDetails = new List<ProjectDetails>();

            HttpClient client = new HttpClient();
            var response = await client.GetAsync(url);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();
                var responseItems = JsonConvert.DeserializeObject<List<GithubRepoItem>>(stringResponse);

                projectDetails.AddRange(
                    from item in responseItems
                    where !item.Fork
                    select new ProjectDetails
                    {
                        ProjectName = item.Name,
                        ProjectSummary = item.Description,
                        ProjectUrl = item.Html_url
                    });


            }
            return projectDetails;
        }
    }
}
