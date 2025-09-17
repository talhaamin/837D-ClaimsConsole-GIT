using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace HIPPAWeb.Models.FormModels
{
    public class UserModel
    {
        [Required]
        [EmailAddress]

        public string Email { get; set; }
    }
}
