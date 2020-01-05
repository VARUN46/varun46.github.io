using Xunit;
using Solution.Infrastructure.Repository;
using System.Threading.Tasks;

namespace XUnitTest.UnitTest
{
    public class DataTest
    {

      [Fact]
      public void TechnologiesDataExists()
      {
            TechnologiesRepository technologiesRepository = new TechnologiesRepository();
            var data = technologiesRepository.GetTechnologyDetails();
            Assert.True(data.Count >= 11);
      }
      
        
      [Fact]
      public void CheckOwnerDetails()
      {
            UserDetailsRepository userDetailsRepository = new UserDetailsRepository();
            var details = userDetailsRepository.GetOwnerDetails();
            Assert.True(details.FullName.Equals("Varun Setia"));
      }


    }
}
