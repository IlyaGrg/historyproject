using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Diagnostics;
using ASP.NET_Core.Models;
using MvcComments.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using MvcComments.Data;


namespace MvcComments.Controllers
{
    public class NewHistoryController : Controller
    {
        private readonly PagesCommentsContext _context;

        public NewHistoryController(PagesCommentsContext context)
        {
            _context = context;
        }

        // GET: Comments
        public async Task<IActionResult> Index()
        {
            return View(await _context.Comments.ToListAsync());
        }
        public IActionResult Create()
        {
            return View();
        }

       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Autor,Comment")] Comments comments)
        {
            if (ModelState.IsValid)
            {
                _context.Add(comments);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(comments);
        }
        public IActionResult RussiaBefore1700()
        {
            return View();
        }
        public IActionResult TheNorthWar()
        {
            return View();
        }
        public IActionResult PetersReforms()
        {
            return View();
        }
        public IActionResult PalaceCoups()
        {
            return View();
        }
        public IActionResult Ekaterina()
        {
            return View();
        }
        public IActionResult Pavel()
        {
            return View();
        }
        public IActionResult AlexanderFirst()
        {
            return View();
        }
        public IActionResult HolyWar()
        {
            return View();
        }
        public IActionResult DecemberInsurrection()
        {
            return View();
        }
        public IActionResult NicolaiFrist()
        {
            return View();
        }
        public IActionResult KrimWar()
        {
            return View();
        }
        public IActionResult AlexandrSecond()
        {
            return View();
        }
        public IActionResult AlexandrSecondSocialMoves()
        {
            return View();
        }
        public IActionResult AlexandrThird()
        {
            return View();
        }
        public IActionResult NicolaiSecond()
        {
            return View();
        }
        public IActionResult FirstWorldWar()
        {
            return View();
        }
        public IActionResult FebruaryRevolution()
        {
            return View();
        }
        public IActionResult OctoberRevolution()
        {
            return View();
        }
        public IActionResult CivilWar()
        {
            return View();
        }
    }
}
