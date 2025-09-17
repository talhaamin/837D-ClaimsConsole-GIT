using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Claims;
using HIPPAWeb.Models.FormModels;
using HIPPAWeb.Models;
using Microsoft.EntityFrameworkCore;


namespace HIPPAWeb.Pages.Account
{
    [ValidateAntiForgeryToken]
    public class LoginModel : PageModel
    {
        private readonly DALEntities _context;
        public LoginModel(Models.DALEntities context)
        {
            _context = context;
         
        }
        public void OnGet()
        {
        }
        [BindProperty]
        public UserModel user { get; set; } = default!;

        public IActionResult OnPostLogin()
        {
            //EF Code to check email address already exist? If Yes then reterieve user object, If No then insert this email as a new User in the DB and reterieve.
            if((!ModelState.IsValid) || (_context.Users == null) || (user == null))
            {
                return Page();
            }

            var dbUser =  _context.Users.FirstOrDefault(m => m.Email == user.Email);
            if(dbUser == null)
            {
                dbUser = new User();
                dbUser.Email = user.Email;
                _context.Users.Add(dbUser);
                _context.SaveChanges();
            }

            var claims = new List<Claim>
                                        {
                                            new Claim(ClaimTypes.Name,dbUser.UserId.ToString()),
                                            new Claim("Email",dbUser.Email),
                                            new Claim("UserId",dbUser.UserId.ToString())
                                            

                                        };
            ClaimsIdentity userIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
            // Set current principal
            Thread.CurrentPrincipal = principal;
            HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal,
                  new AuthenticationProperties
                  {
                      IsPersistent = true,
                      ExpiresUtc = DateTime.UtcNow.AddMinutes(20)
                  });

            return Redirect("~/Index");

        }
    }
}
