import classNames from "classnames";

export const Filter = (props) => {
  // propsを定義
  const { value, onChange } = props;

  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames("panel-item", { "is-active": value === "ALL" })}
      >
        全件
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "TODO")}
        className={classNames("panel-item", { "is-active": value === "TODO" })}
      >
        未チェック
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "DONE")}
        className={classNames("panel-item", { "is-active": value === "DONE" })}
      >
        チェック済み
      </a>
    </div>
  );
};

export default Filter;
