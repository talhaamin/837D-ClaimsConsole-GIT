using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using HIPPAWeb.Models;
using HIPPAWeb.Models.FormModels;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Security.Principal;

namespace HIPPAWeb.Pages.List
{
    [Authorize]
    public class MessageListModel : PageModel
    {
        private string userId;
        private readonly IPrincipal _principal;
        [BindProperty]
        public bool IsPrivate { get; set; }

        private readonly HIPPAWeb.Models.DALEntities _context;

        public MessageListModel(HIPPAWeb.Models.DALEntities context, IPrincipal principal)
        {
            _context = context;
            _principal = principal;
            IsPrivate = true;
        }

        public IList<Message> Message { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.Messages != null)
            {
               IsPrivate = false;

                Message = await _context.Messages.Where(a => a.IsPrivate == IsPrivate).ToListAsync();
               
            }
        }
        public async Task OnGetDelete(int? id)
        {
            if(id != null)
            {
                Message msg =  _context.Messages.FirstOrDefault(a => a.MessageId == id);
                if(msg != null)
                {
                    _context.Messages.Remove(msg);
                    _context.SaveChanges();
                }
            }

            Message = await _context.Messages.Where(a => a.IsPrivate == IsPrivate).ToListAsync();

        }

        public async Task OnPostAsync()
        {
            //  userId = User.Identity
            var identity = (ClaimsPrincipal)_principal;
            if (identity != null)
            {
                // Get the claims values

                userId = identity.Claims.Where(c => c.Type == ClaimTypes.Name)
                                   .Select(c => c.Value).SingleOrDefault();
            }



            Message = await _context.Messages.Where(a => a.IsPrivate == IsPrivate && a.UserId == Convert.ToInt64(userId)).ToListAsync();
        }
    }
}
