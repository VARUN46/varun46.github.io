using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using Solution.Interfaces;
using Solution.Infrastructure.Repository;
using Solution.ViewModels.Pages;
using Solution.ViewModels.Shared;

namespace Solution.BlazorApp
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<AppMainViewModel>();

            services.AddScoped<IUserDetailsRepository, UserDetailsRepository>();
            services.AddScoped<WelcomeViewModel>();

            services.AddScoped<ITechnologiesRepository, TechnologiesRepository>();
            services.AddScoped<TechnologiesViewModel>();

            services.AddScoped<IProjectsRepository, ProjectsRepository>();
            services.AddScoped<PortfolioViewModel>();
        }

        public void Configure(IComponentsApplicationBuilder app)
        {            
            app.AddComponent<NoRouteApp>("portfolio-app");
        }
    }
}
