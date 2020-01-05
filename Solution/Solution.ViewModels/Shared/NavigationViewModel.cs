using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.ViewModels.Shared
{
    public class NavigationViewModel
    {
        public const string Home = "Home";

        public const string Technologies = "Technologies";

        public const string Portfolio = "Portfolio";

        public Dictionary<string,string> Items { get; set; }

        public string ActiveItem { get; set; }

        public NavigationViewModel()
        {
            Items = new Dictionary<string, string>
            {
                { Home, "home" },

                { Technologies, "tech" },

                { Portfolio, "portfolio" }
            };
            ActiveItem = Home;
        }

        



    }
}
