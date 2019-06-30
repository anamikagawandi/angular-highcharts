import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {

  wordCount: number;
  vowelCount: number;
  articleCount: number;
  longLen: number;
  shortLen: number;

  constructor() { }

  getWordCount(str) {
    return str.split(" ").length;
  }

  getVowelsCount(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }


  getArticleCount(str) {

    return str.split(" ").reduce(function (n, b) {
      return n + (b == "a" || b == "an" || b == "the");
    }, 0);
  }

  getShortestWord(str) {
    let words = str.split(" ");
    // let shortest = words.reduce((shortestWord, currentWord) => {
    //   if (!(currentWord == "a" || currentWord == "an" || currentWord == "the")) {
    //     return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    //   }

    // }, words[0]);


    let filter = words.filter((e) => {
      if (!(e == "a" || e == "an" || e == "the")) {
        return e
      }
    })

    //console.log(filter);
    if (filter.length == 0) {
      //console.log("True")
      return 0
    }


    let shortest = filter.reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    });

    // console.log(typeof shortest)
    // console.log(shortest)
    return shortest.length;
  }

  getLongestString(str) {
    return str.split(" ").reduce(function (a, b) {
      return a.length > b.length ? a : b;
    }).length;
  }

  calculate(str) {
    this.wordCount = null;
    this.vowelCount = null;
    this.articleCount = null;
    this.longLen = null;
    this.shortLen = null;
    str = str.trim();
    //console.log(str)
    if (str == "") {
      return alert("Enter a valid string");
    }
    this.wordCount = this.getWordCount(str);
    this.vowelCount = this.getVowelsCount(str);
    this.articleCount = this.getArticleCount(str);
    this.longLen = this.getLongestString(str);
    this.shortLen = this.getShortestWord(str);
  }

  ngOnInit() {

  }

}
