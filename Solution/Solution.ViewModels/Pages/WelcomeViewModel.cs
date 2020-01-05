using Solution.Entities;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.ViewModels.Pages
{
    public class WelcomeViewModel : SectionViewModelBase
    {
        public User UserDetails { get; set; }

        public WelcomeViewModel(IUserDetailsRepository user)
        {
            this.UserDetails = user.GetOwnerDetails();
            Title = UserDetails.FullName;
        }

    }
}
