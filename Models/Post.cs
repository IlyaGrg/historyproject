using System.ComponentModel.DataAnnotations;

namespace MvcComments.Models
{
    public class Post
    {
        public int Id { get; set; } 

        [Required(ErrorMessage = "Имя автора обязательно.")]
        [StringLength(50, ErrorMessage = "Имя автора не должно превышать 50 символов.")]
        [Display(Name = "Автор")]
        public string Author { get; set; }

        [Required(ErrorMessage = "Название поста обязательно.")]
        [StringLength(100, ErrorMessage = "Название поста не должно превышать 100 символов.")]
        [Display(Name = "Название поста")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Содержание поста обязательно.")]
        [Display(Name = "Содержание поста")]
        public string Content { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Дата публикации")]
        public DateTime PublicationDate { get; set; } = DateTime.Now; 
    }
}