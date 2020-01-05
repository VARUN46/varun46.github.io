using Solution.Entities;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Infrastructure.Repository
{
    public class TechnologiesRepository : ITechnologiesRepository
    {
        public List<TechnologyDetails> GetTechnologyDetails()
        {
            List<TechnologyDetails> details = new List<TechnologyDetails> {
             new TechnologyDetails{ TechnologyName= "C#", Type = Entities.Constants.TechnologyType.LANGUAGE },
             new TechnologyDetails{ TechnologyName= "JavaScript", Type = Entities.Constants.TechnologyType.LANGUAGE, },
             new TechnologyDetails{ TechnologyName= "ASP.NET MVC 5", Type = Entities.Constants.TechnologyType.FRAMEWORK, },
             new TechnologyDetails{ TechnologyName= "ASP.NET Web API 2", Type = Entities.Constants.TechnologyType.FRAMEWORK, },
             new TechnologyDetails{ TechnologyName= "ASP.NET Core Blazor", Type = Entities.Constants.TechnologyType.FRAMEWORK, },
             new TechnologyDetails{ TechnologyName= "ASP.NET Core MVC", Type = Entities.Constants.TechnologyType.FRAMEWORK, },
             new TechnologyDetails{ TechnologyName= "WCF Services", Type = Entities.Constants.TechnologyType.FRAMEWORK, },
             new TechnologyDetails{ TechnologyName= "SQL Server", Type = Entities.Constants.TechnologyType.DATABASE, },
             new TechnologyDetails{ TechnologyName= "jQuery", Type = Entities.Constants.TechnologyType.CLIENT_SIDE, },
             new TechnologyDetails{ TechnologyName= "Bootstrap", Type = Entities.Constants.TechnologyType.CLIENT_SIDE, },
             new TechnologyDetails{ TechnologyName= "Angular 8", Type = Entities.Constants.TechnologyType.CLIENT_SIDE, }
            };
            return details;
        }
    }
}
