export default {
    init(context) {
        this.http = context.http
    },
    getSecondCourseDatas(onSuccess, onError) {
        let params = {
            "date_ranges": [{"start": "2018-06-30", "end": "2018-07-31"}],
            "dimensions": [{"name": "day-of-week"}, {"name": "hour"}],
            "metrics": [{"name": "tc:page_view"}],
            "filters": {}
        }
        this.http.post("http://dashboard.qa.tronclass.com.cn/api/al/heatmap", params)
            .then(onSuccess, onError);
    },
}
