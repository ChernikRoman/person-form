import { useForm, SubmitHandler } from "react-hook-form";
import { PersonFormFields } from "./PersonForm.interfaces";

export default function PersonForm() {
	// const { register, handleSubmit } = useForm();

	const handlePersonFormSubmit: SubmitHandler<PersonFormFields> = (formValues) => {
		console.log(formValues)
	}

	return (
		<form>
			<h1>Заполните форму</h1>

			<label>
				ФИО
				<input type="text" placeholder="Заполнить"/>
			</label>

			<label>
				Рейтинг
				<input type="number" placeholder="Введите значение от 1 до 100"/>
			</label>

			<label>
				<input type="checkbox" />
				Имеется аккредитация
			</label>

			<label>
				Рейтинг
				<input type="number" placeholder="Введите значение от 1 до 100"/>
			</label>

			<label>
				Желаемая сумма
				<input type="number" placeholder="Введите значение от 1 до 100"/>
			</label>

			<label>
				Категория
				<select name="category">
					<option value="category-1">Категория 1</option>
					<option value="category-2">Категория 2</option>
					<option value="category-3">Категория 3</option>
					<option value="category-4">Категория 4</option>
					<option value="category-5">Категория 5</option>
				</select>
			</label>

			<label>
				Комментарий
				<input type="text" placeholder="Заполнить"/>
			</label>

			<label>
				Загрузите файл
				<input type="file" accept=".pdf" />
			</label>

			<span>Итоговая сумма: {0}</span>

			<button>Отправить</button>
		</form>
	)
}