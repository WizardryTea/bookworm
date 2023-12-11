<script>
function setGenreFilterAndNavigate(genre) {
   document.getElementById('genreFilter').value = genre;
   //вызываем событие submit для формы, чтобы направить пользователя на новую страницу
   document.getElementById('my-form-id').submit();
}
</script>
