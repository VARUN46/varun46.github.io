using Solution.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Solution.Interfaces
{
    public interface IProjectsRepository
    {
        Task<List<ProjectDetails>> GetGithubProjectsDetailsAsync(string url);
    }
}
