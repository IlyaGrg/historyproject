using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MvcComments.Models;


namespace MvcComments.Data
{
    public class PagesCommentsContext : DbContext
    {
        public PagesCommentsContext (DbContextOptions<PagesCommentsContext> options)
            : base(options)
        {
        }

        public DbSet<MvcComments.Models.Comments> Comments { get; set; } = default!;
        public DbSet<Post> Post { get; set; }
    }
}
