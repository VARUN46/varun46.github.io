using Solution.Entities.Constants;

namespace Solution.Entities
{
    public class TechnologyDetails
    {
        public int TechnologyDetailsId { get; set; }

        public string TechnologyName { get; set; }

        public bool IsExperienceVisible { get; set; }

        public TechnologyType Type { get; set; }

        public int ExperienceInMonths { get; set; }
    }
}
