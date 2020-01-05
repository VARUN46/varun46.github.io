using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Entities
{
    public class GithubRepoItem
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string Html_url { get; set; }

        public bool Fork { get; set; }
    }
}
