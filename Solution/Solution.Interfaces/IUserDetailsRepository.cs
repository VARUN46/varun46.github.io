using Solution.Entities;

namespace Solution.Interfaces
{
    public interface IUserDetailsRepository
    {
        User GetOwnerDetails();
    }
}
