using Solution.Entities;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Solution.ViewModels.Pages
{
    public class PortfolioViewModel : SectionViewModelBase
    {
        public List<ProjectDetails> Projects { get; set; }

        public bool IsProjectsLoading { get; set; }

        IProjectsRepository projectsRepository;

        public PortfolioViewModel(IProjectsRepository projectsRepo)
        {
            this.projectsRepository = projectsRepo;
            Projects = new List<ProjectDetails>();
            this.Title = "Portfolio";
            this.IsProjectsLoading = true;
        }

        public async Task InitializeDataAsync()
        {
            try
            {
                this.Projects = await projectsRepository.GetGithubProjectsDetailsAsync("https://api.github.com/users/VARUN46/repos");
      
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                this.IsProjectsLoading = false;

            }
        }

       

    }
}
