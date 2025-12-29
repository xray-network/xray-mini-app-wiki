import React, { useState, useEffect } from "react"
import { Timeline, Tooltip } from "antd"
import classNames from "classnames"
import style from "./style.module.css"

export type TimelineItem = {
  year: string
  title: string
  data: TimelineData[]
}

export type TimelineData = {
  status: "in_progress" | "completed"
  title: string
  description?: string
  areas?: string[]
  items?: {
    status: "in_progress" | "awaiting" | "completed"
    type: string
    description: string
  }[]
}

const RoadmapSection = ({ items }: { items: TimelineData[] }) => {
  const getStatus = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed:"
      case "in_progress":
        return "In Progress:"

      default:
        return "Awaiting:"
    }
  }

  return (
    <Timeline
      items={items.map((item, index) => {
        return {
          dot:
            item.status === "completed" ? (
              <i className="xi xi-check_circled text-success" />
            ) : (
              <i className="xi xi-clock" />
            ),
          children: (
            <div key={index}>
              <strong className="font-size-18">{item.title}</strong>
              {(item?.areas?.length || 0) > 0 && (
                <div className="pt-2 font-size-14 text-muted">
                  {item.areas?.map((area, index) => (
                    <span className="xray-tag xray-tag-gray me-2 mb-2" key={index}>
                      {area}
                    </span>
                  ))}
                </div>
              )}
              {item.description && <div className="font-size-14 text-muted">{item.description}</div>}
              {(item.items?.length || 0) > 0 && (
                <div className="font-size-14 text-muted">
                  <ol className="mt-3">
                    {item.items?.map((subItem, index) => (
                      <li
                        key={index}
                        className={classNames({
                          [style.Done]: subItem.status === "completed",
                          [style.Active]: subItem.status === "in_progress",
                        })}
                      >
                        <span
                          className={classNames("me-2", {
                            [style.Tag]: true,
                            [style.TagPrimary]: subItem.status === "in_progress",
                            [style.TagSuccess]: subItem.status === "completed",
                          })}
                        >
                          {getStatus(subItem.status)} {subItem.type}
                        </span>{" "}
                        {subItem.description}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ),
        }
      })}
    />
  )
}

const Roadmap = () => {
  const [roadmapItems, setRoadmapItems] = useState<TimelineItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getStats = async () => {
      const roadmapItemsResponse = await fetch(
        "https://raw.githubusercontent.com/xray-network/projects-map/refs/heads/main/data/roadmap.json"
      )
      const roadmapItemsData = await roadmapItemsResponse.json()
      setRoadmapItems(roadmapItemsData)
      setLoading(false)
    }
    getStats()
  }, [])

  return (
    <div>
      <div className="mb-5">
        <span className="d-inline-flex align-items-center me-3">
          <span className="xray-dot xray-dot-large me-2" /> Completed
        </span>
        <span className="d-inline-flex align-items-center me-3">
          <span className="xray-dot xray-dot-large xray-dot-blue me-2" /> In Progress
        </span>
        <span className="d-inline-flex align-items-center me-3">
          <span className="xray-dot xray-dot-large xray-dot-gray-middle me-2" /> Awaiting
        </span>
        <span className="d-inline-flex align-items-center me-3">
          <span className="xray-dot xray-dot-large xray-dot-gray-dark me-2" /> Areas of Development
        </span>
      </div>
      {/* spinner */}
      {roadmapItems.map((item, index) => {
        return (
          <div key={index} className="mb-5">
            <h4>
              {item.year} — {item.title}
            </h4>
            <div
              className={classNames("mb-3", {
                [style.timeline]: true,
                [style.timelineStatus]: true,
              })}
            >
              <RoadmapSection items={item.data} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Roadmap
