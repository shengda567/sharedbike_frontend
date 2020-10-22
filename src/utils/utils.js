export default {
    formateDate(time) {
      if (!time) {
        return "";
      }
      let date = new Date(time);
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    },
    pagination(data, callback) {
      return {
        onChange: (current) => {
          callback(current);
        },
        current: data.result.page,
        pageSize: data.result.page_size,
        total: data.result.total_count,
        showTotal: () => {
          return `${data.result.total_count} totally`;
        },
        showQuickJumper: true,
      };
    },
  };
  