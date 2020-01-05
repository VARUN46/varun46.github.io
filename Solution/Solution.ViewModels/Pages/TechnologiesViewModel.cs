using Solution.Entities;
using Solution.Entities.Constants;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.ViewModels.Pages
{
    public class TechnologiesViewModel : SectionViewModelBase
    {
        public Dictionary<string, List<TechnologyDetails>> TechnologiesDetails { get; set; }

        public TechnologiesViewModel(ITechnologiesRepository technologies)
        {
            TechnologiesDetails = new Dictionary<string, List<TechnologyDetails>>();
            Title = "Technologies";
            var techDetails = technologies.GetTechnologyDetails();

            foreach (var item in techDetails)
            {
                string key = item.Type.ToString().Replace("_"," ");
                if (!this.TechnologiesDetails.ContainsKey(key))
                {
                    this.TechnologiesDetails.Add(key, new List<TechnologyDetails>());
                }

                this.TechnologiesDetails[key].Add(item);

            }
        }
    }

}
