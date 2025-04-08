using System.ComponentModel.DataAnnotations;

namespace MvcComments.Models;

public class Comments
{
    public int Id { get; set; }
    public string Autor { get; set; }
    public string Comment { get; set; }


}