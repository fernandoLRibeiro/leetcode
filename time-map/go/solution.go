package main

type TimeMap struct {
	store map[string][]ValStamp
}

type ValStamp struct {
	Value     string
	Timestamp int
}

func Constructor() TimeMap {
	return TimeMap{store: make(map[string][]ValStamp)}
}

func (this *TimeMap) Set(key string, value string, timestamp int) {
	_, ok := this.store[key]

	if !ok {
		this.store[key] = make([]ValStamp, 0)
	}
	this.store[key] = append(this.store[key], ValStamp{value, timestamp})
}

func (this *TimeMap) Get(key string, timestamp int) string {
	var res string
	var values []ValStamp
	_, ok := this.store[key]

	if ok {
		values = this.store[key]
	}

	var hi, lo int = len(values) - 1, 0
	var mid int
	for hi >= lo {
		mid = lo + (hi-lo)/2

		if values[mid].Timestamp <= timestamp {
			res = values[mid].Value
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return res
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
