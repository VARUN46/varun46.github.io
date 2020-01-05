using System;

namespace Solution.Entities
{
    public class User
    {
        public Guid UserId { get; set; }

        public string FirstName { private get; set; }

        public string LastName { private get; set; }

        public string FullName { 
            
            get 
            { 
                return string.Format("{0} {1}",FirstName, LastName); 
            }
            
        }

        public string UserSummary { get; set; }
    }
}
