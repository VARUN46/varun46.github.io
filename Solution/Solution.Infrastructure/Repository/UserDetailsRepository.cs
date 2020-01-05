using Solution.Entities;
using Solution.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Infrastructure.Repository
{
    public class UserDetailsRepository : IUserDetailsRepository
    {
        public User GetOwnerDetails()
        {
            User user = new User
            {
                 FirstName = "Varun",
                 LastName = "Setia",
                 UserSummary = "A Full Stack Developer"
            };
            return user;
        }
    }
}
