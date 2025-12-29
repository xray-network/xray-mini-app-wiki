import { menuConfig } from "@/config/menu"
import { Link } from "react-router-dom"
import style from "./style.module.css"

const Contents = () => {
  return (
    <div>
      {menuConfig.map((section, index) => {
        if (section.link === "/") return null
        return (
          <div key={index} className="mb-5">
            <div className={style.title}>{section.text}</div>
            <div className={style.section}>
              {section.items?.map((item, index) => (
                <Link key={index} to={item.link} className={style.link}>
                  <span className="me-3">
                    {item.icon ? <i className={item.icon} /> : null} {item.text}
                  </span>
                  <i className="xi xi-arrow_forward ms-auto" />
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Contents
