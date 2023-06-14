import css from './Search.module.scss'
import { Link } from 'react-router-dom';

export const Search = () => {
    return (
    <div className={css.search_container}>  
      <div className={css.contentSearchContainer}>
        <div className={css.blockSearchContainer}>
          <div className={css.containerSearchCaption}>
            <h1 className={css.search_caption}>Найдите необходимые
              <br/> данные в пару киков.
            </h1>
            <p className={css.search_description}>Задайте параметры поиска.
              <br/>Чем больше заполните, тем точнее поиск
            </p>
          </div>
          <div className={css.search_img_mobile}></div>
        </div>       
        
        <form className={css.searchForm}>
          < div className={css.input_container}>
            <div className={css.blockSearch}>
              <label className={css.labelSearch} >ИНН компании*</label>  
              <input className={css.inputSearch} placeholder="10 цифр" type="text" />
            </div>
            <div  className={css.blockSearch}>
              <label className={css.labelSearch} >Тональность</label>  
              <select className={css.selectSearch}>
                <option>Любая</option>
              </select>
            </div>
            <div className={css.blockSearch}>
              <label className={css.labelSearch} >Количество документов в выдаче*</label>  
              <input className={css.inputSearch} placeholder="от 1 до 1000" type="text" />
            </div>
            <div className={css.blockSearchData}>
              <label className={css.labelSearch} >Диапазон поиска*</label>
              <div className={css.blockSearchDataSelect}>
                <input className={css.inputSearchDate} type="date" />
                <input className={css.inputSearchDate} type="date" />
              </div>
            </div>
          </div>
          <div className={css.checkboxContainer}>
            <div className={css.input_container_right}>
              <input className={css.inputCheckbox} id="formCheckbox-1" type="checkbox" />
              <label for="formCheckbox-1" className={css.labelCheckbox}>Признак максимальной полноты</label>
            
              <input className={css.inputCheckbox} id="formCheckbox-2" type="checkbox" />
              <label for="formCheckbox-2" className={css.labelCheckbox}>  Упоминание в бизнес-контексте</label>

              <input className={css.inputCheckbox} id="formCheckbox-3" type="checkbox" />
              <label for="formCheckbox-3" className={css.labelCheckbox}>Главная роль в публикации</label>
                       
              <input className={css.inputCheckbox} id="formCheckbox-4" type="checkbox" />
              <label for="formCheckbox-4" className={css.labelCheckbox}>Публикации только с риск-факторами</label>
            
              <input className={css.inputCheckbox} id="formCheckbox-5" type="checkbox" />
              <label for="formCheckbox-5" className={css.labelCheckbox}>Включать технические новости рынков</label>
            
              <input className={css.inputCheckbox} id="formCheckbox-6" type="checkbox" />
              <label for="formCheckbox-6" className={css.labelCheckbox}>Включать анонсы и календари</label>
            
              <input className={css.inputCheckbox} id="formCheckbox-7" type="checkbox" />
              <label for="formCheckbox-7" className={css.labelCheckbox}>Включать сводки новостей</label>
            </div>
            
            <div className={css.button_container}>
              <Link to= "/SearchResult" className={css.link}>
                <button className={css.button_service}> Поиск</button>
              </Link>
              <p className={css.obligatoryField}>* Обязательные к заполнению поля</p>
            </div>
          </div>
        </form>
      </div>
      <div className={css.search_img}>
          <div className={css.search_img_1}></div>
          <div className={css.search_img_2}></div>
          <div className={css.search_img_3}></div>
      </div>
    </div>
  )
}

export default Search