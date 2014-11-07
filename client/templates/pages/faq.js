var faqContents = [
	{
		number: "One",
    question: "Who needs acupuncture?",
    answer: "<p>If you are suffering from pain or have a health problem that has not responded satisfactorily to Western medicine, you may benefit tremendously from acupuncture and herbs. In many cases, acupuncture has been more effective than conventional Western treatments. <br/>Your most valuable asset is good health. Invest in it wisely. Consider acupuncture.</p>"
  }, {
  	number: "Two",
    question: "What can I expect if treated?",
    answer: "<p>Many conditions may be alleviated very rapidly by acupuncture; however, some conditions which have risen over a course of years will only be relieved with slow, steady progress. As in any form of healing, the patient’s attitude, diet, determination, and lifestyle will affect the outcome of a course of treatment.</p><p>Although there are techniques in Traditional Oriental Medicine for healing most conditions, there are medical circumstances that can be dealt with more effectively by Western Medicine. In such cases, your acupuncturist will recommend that you contact a physician. As in the case in China, acupuncture should be seen as complementary with Western Medicine.</p>"
  }, {
  	number: "Three",
    question: "Is acupuncture safe?",
    answer: "<p>In the hands of a certified acupuncturist, your safety is assured. The needles are available in pre-sterilized, disposable form so that the risk of transmittable diseases is eliminated. Because treatments are all-natural, side effects are virtually non-existent.</p>"
  }, {
  	number: "Four",
    question: "What does the patient feel during treatment?",
    answer: "<p>Common feelings during acupuncture are local distension, heaviness, numbness, soreness, or a sensation like a tiny electric shock. All of these feelings are mild. They indicate that the healing is in progress. Notify the doctor if these feelings become uncomfortable. </p> < p > Most patients find the treatment very relaxing, which brings on a feeling of well being.Most are surprised at how comfortable they are during the treatment and how easily the needles are placed.Some people even go to sleep during the treatment.A patient may feel a slight sensation upon entry and then pressure or a“ dull” or“ surging” reaction when the needle reaches the“ Qi” or correct point.Rest assured, the needles are different from the hypodermic needles that are given in injections.The tiny needles are specifically designed to be virtually painless. < /p>"
  }, {
  	number: "Five",
    question: "What is the procedure of treatment?",
    answer: " <p>The patient can feel free to discuss the treatment plan with his/her acupuncturist. During the treatment the patient lies or sits down. The selected points are cleaned with 70%-alcholized cotton, and then the disposable sterilized needles are inserted. The needles typically stay in place for about a half an hour. For some conditions, however, they may be placed for only a few minutes or up to an hour. Twirling or push-pull movements may manipulate the needles. Sometimes an electrical current is applied to further enhance the stimulation of the acupuncture points. The acupuncturist adjusts the electric current to the level where the patient is able to feel a slight vibrating sensation. The <a href='http://www.acupuncturetoday.com/abc/moxibustion.php' target='_blank'>moxibustion method</a>, or “cupping,” can also be used in combination with acupuncture treatments for some cases.</p>"
  }, {
  	number: "Six",
    question: "How many treatments are needed?",
    answer: "<p>The average number is probably between three and twelve sessions. Some cases may need only two or three treatments, while some chronic conditions may need relatively longer treatments.</p>"
  }, {
  	number: "Seven",
    question: "Why is acupuncture growing so rapidly in the US?",
    answer: "<li>It is safe, effective, and has virtually no side effects.</li> < li > It uses the body’s own natural healing processes to effect relief. < /li> < li > It works on many health problems for which Western medicine is less effective. < /li> < li > It puts people back in control of their own bodies and health care. < /li> < li > It treats the whole body and not just the disease. < /li>"
  }
];

Template.faq.rendered = function(){

};

Template.faq.helpers({
	faqContents: function(){
		return faqContents;
	}
});