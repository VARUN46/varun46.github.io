using Solution.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Interfaces
{
    public interface ITechnologiesRepository
    {
        List<TechnologyDetails> GetTechnologyDetails();
    }
}
