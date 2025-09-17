using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Claims;
using HIPPAWeb.Models.FormModels;
using HIPPAWeb.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace HIPPAWeb.Pages.Account
{
    
    public class LogoutModel : PageModel
    {
        public void OnGet()
        {
        }
        public IActionResult OnPostLogout()
        {
            //Load method ofpage
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Redirect("~/Index");
        }
                
    }
}
