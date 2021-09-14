import React from "react";

function BucketInput(props) {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = e.target.value;
      props.buck_insert(bucket);
    }
  };
  return (
    <div className="w3-form-control w3-margin">
      <input
        className="w3-input"
        placeholder="버킷에 추가할 내용을 입력하세요"
        onKeyDown={onKeyDown}
      ></input>
    </div>
  );
}

export default BucketInput;
