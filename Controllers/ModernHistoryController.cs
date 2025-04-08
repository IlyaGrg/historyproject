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
using System.Xml.Linq;
namespace MvcComments.Controllers
{
    public class ModernHistoryController : Controller
    {
        private readonly PagesCommentsContext _context;

        public ModernHistoryController(PagesCommentsContext context)
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

        // POST: Comments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
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
        public IActionResult USSR()
        {
            return View();
        }
        public IActionResult IndustrializationAndCollectivization()
        {
            return View();
        }
        public IActionResult StalinsRepresions()
        {
            return View();
        }
        public IActionResult SovetFinnishWar()
        {
            return View();
        }
        public IActionResult SecondHollyWar()
        {
            return View();
        }
        public IActionResult USSRAfterSecondHolyWar()
        {
            return View();
        }
        public IActionResult HoldWar()
        {
            return View();
        }
        public IActionResult KhrushchevsThaw()
        {
            return View();
        }
        public IActionResult BerlinsWall()
        {
            return View();
        }
        public IActionResult Breznev()
        {
            return View();
        }
        public IActionResult AfganWar()
        {
            return View();
        }
        public IActionResult Perestroika()
        {
            return View();
        }
        public IActionResult CollapseOfTheUSSR()
        {
            return View();
        }
        public IActionResult Eltsin()
        {
            return View();
        }
        public IActionResult Putin()
        {
            return View();
        }
        public IActionResult Krym()
        {
            return View();
        }
        public IActionResult RussiaBefore2022()
        {
            return View();
        }
    }
}
