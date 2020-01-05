using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.ViewModels.Shared
{
    public sealed class AppMainViewModel
    {
        public NavigationViewModel NavigationVm { get; set; }
        public AppMainViewModel()
        {
            this.NavigationVm = new NavigationViewModel();
        }

    }
}
