using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using HIPPAWeb.Models.FormModels;
using HIPPAWeb.Models;
using Microsoft.Extensions.Configuration.UserSecrets;
using System.Security.Claims;
using System.Security.Principal;
using System.Security.AccessControl;
using Microsoft.AspNetCore.Authorization;

namespace HIPPAWeb.Pages
{
    [Authorize]
    public class PrototypeModel : PageModel
    {
        private string userId;
        private readonly HIPPAWeb.Models.DALEntities _context;
        private readonly IPrincipal  _principal;
        [BindProperty]
        public MessageModel message { get; set; } = default!;

        public PrototypeModel(HIPPAWeb.Models.DALEntities context,IPrincipal principal)
        {
            _context = context;
            _principal = principal;
        }

        public void OnGet(int? id)
        {
          if(id != null)
            {
                if(_context.Messages != null)
                {
                    Message msg = _context.Messages.FirstOrDefault(a => a.MessageId == id);
                    if(msg != null)
                    {
                        message = new MessageModel();
                        message.TestScenarioName = msg.TestScenarioName;
                        message.MessageXml = msg.MessageXml;
                        if (msg.IsPrivate.HasValue)
                            message.IsPrivate = msg.IsPrivate.Value;
                        else
                            message.IsPrivate = false;

                        message.UserId = msg.UserId;
                        message.MessageId = msg.MessageId;
                        message.CreatedDate = msg.CreatedDate;
                        ViewData["LoadData"] = true;
                    }



                }
            }   
        }
        public IActionResult OnPostSave()
        {
            if ((!ModelState.IsValid) || (_context.Messages == null) || (message == null))
            {
                return Page();
            }

            //  userId = User.Identity
            var identity = (ClaimsPrincipal)_principal;
            if (identity != null)
            {
                // Get the claims values
            
                userId = identity.Claims.Where(c => c.Type == ClaimTypes.Name)
                                   .Select(c => c.Value).SingleOrDefault();
            }


            message.UserId = (long?)Convert.ToInt64(userId);


            var dbMessage = _context.Messages.FirstOrDefault(m => m.MessageId == message.MessageId);
            if (dbMessage == null)
            {
                dbMessage = new Message();
                dbMessage.UserId = message.UserId;
                dbMessage.TestScenarioName = message.TestScenarioName;
                dbMessage.MessageXml = message.MessageXml;
                dbMessage.MessageText = message.MessageText;
                dbMessage.IsPrivate = message.IsPrivate;
                dbMessage.IsActive = 1;

                _context.Messages.Add(dbMessage);

                _context.SaveChanges();
            }
            else
            {
                dbMessage.UserId = message.UserId;
                dbMessage.TestScenarioName = message.TestScenarioName;
                dbMessage.MessageXml = message.MessageXml;
                dbMessage.MessageText = message.MessageText;
                dbMessage.IsPrivate = message.IsPrivate;
                dbMessage.IsActive = 1;

                _context.Messages.Update(dbMessage);

                _context.SaveChanges();
            }
            
            return Redirect("~/List/MessageList");
        }

    }
}
