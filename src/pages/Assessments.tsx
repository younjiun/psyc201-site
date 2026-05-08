
import { FileText } from 'lucide-react';

const Assessments = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Assessments</h2>
        <p className="text-lg text-slate-600">
          This page contains key PSYC201 assessment information while Nuku/Canvas is unavailable. Please check this page and your university email for updates.
        </p>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800">Proposal Pitch — Submission Day Reference</h3>
        </div>
        <div className="p-6 space-y-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
            <p className="text-amber-800 font-medium mb-1">Important Update:</p>
            <p className="text-amber-900 text-sm">
              Canvas is currently down. A Qualtrics submission portal has been set up: <a href="https://vuw.qualtrics.com/jfe/form/SV_6zJZLL8YOvLff9k" className="underline font-semibold" target="_blank" rel="noreferrer">https://vuw.qualtrics.com/jfe/form/SV_6zJZLL8YOvLff9k</a>.<br/>
              Deadline remains 11:59 PM tonight (NZST). No Question Asked Extension: Sunday 11:59 PM.<br/>
              <em className="block mt-2 text-amber-800 opacity-90">Note: this document was put together from various draft documents as we couldn't access the final versions on Canvas and may include minor inconsistencies.</em>
            </p>
          </div>

          <div>
            <p className="text-slate-600">
              This document brings together the key information you need to finalise and submit your pitch. It pulls from the Canvas pitch brief and the guidance covered in Lab 3 (Week 6) and Lab 4 (Week 8).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Key details</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">Due</div><div className="md:col-span-3">Friday 8 May 2026, 11:59 PM (NZST)</div>
              <div className="font-semibold text-slate-800">Weight</div><div className="md:col-span-3">10% of final course grade</div>
              <div className="font-semibold text-slate-800">Word limit</div><div className="md:col-span-3">800 words (±10%, excluding references)</div>
              <div className="font-semibold text-slate-800">Format</div><div className="md:col-span-3">Written pitch (Word) — upload via the Qualtrics portal</div>
              <div className="font-semibold text-slate-800">References</div><div className="md:col-span-3">Minimum 3 peer-reviewed articles, APA 7th edition</div>
              <div className="font-semibold text-slate-800">MCR</div><div className="md:col-span-3">You must submit and achieve at least 30% to pass the course</div>
              <div className="font-semibold text-slate-800">Late Policy</div><div className="md:col-span-3">2 days of no-question asked extension, further requests to course mailbox with supporting documentation</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">The four components your pitch must contain</h4>
            <p className="text-slate-600 text-sm mb-4">You don't need formal section headings, but each of these four components should be clearly present. Total length: approximately 700–900 words plus references.</p>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <strong className="text-slate-800">1. Research Question and Connection to the Article (200–250 words)</strong>
                <p>What is your research question? How does it arise from the article — what specific finding, limitation, or gap does it address? Demonstrate that you understand the original study well enough to identify where it leaves room for further investigation.</p>
              </div>
              <div>
                <strong className="text-slate-800">2. Significance and Relevance (200–250 words)</strong>
                <p>Why does this question matter? What would answering it contribute to our understanding of brain–behaviour relationships? Does it have real-world relevance — for health, education, technology, policy, or society? Argue for why this research should be done. You may draw on concepts and evidence from the course to support your argument.</p>
              </div>
              <div>
                <strong className="text-slate-800">3. Proposed Approach (150–200 words)</strong>
                <p>How would you approach investigating this question? Describe the general design: type of study (e.g., experiment, quasi-experiment, observational study, survey), who you would study and why, and what you would measure. Show that your approach is logically suited to your question.</p>
              </div>
              <div>
                <strong className="text-slate-800">4. Expected Outcomes and Implications (150–200 words)</strong>
                <p>What would you expect to find? What would different possible outcomes mean for the field? If your hypothesis is supported, what are the implications? If it is not, what would that tell us? Showing that you have thought through the logic of possible results demonstrates real understanding of the research process.</p>
              </div>
              <div className="pt-2">
                <strong className="text-slate-800">References</strong>
                <p>Cite at least three peer-reviewed articles: your chosen article from the course list, plus at least two additional peer-reviewed sources you have independently identified. The reference list does not count towards your word limit.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Marking criteria</h4>
            <p className="text-slate-600 text-sm mb-4">Your pitch will be assessed across five criteria, each marked independently on a 0–100 scale and weighted equally at 20%.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-slate-600 border border-slate-200">
                <thead className="bg-slate-50 text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-2 font-semibold border-r border-slate-200">Criterion</th>
                    <th className="px-4 py-2 font-semibold border-r border-slate-200">Weight</th>
                    <th className="px-4 py-2 font-semibold">Standard for strong work (A range)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">Research Question & Connection to the Article</td>
                    <td className="px-4 py-3 border-r border-slate-200">20%</td>
                    <td className="px-4 py-3">A clear, focused research question that follows logically from a specific finding, limitation, or gap in the article. Demonstrates strong understanding of the original study and articulates precisely how the proposed question extends or builds on the existing work.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">Originality of Direction</td>
                    <td className="px-4 py-3 border-r border-slate-200">20%</td>
                    <td className="px-4 py-3">The proposed direction has not, to the best of your and the assessor's knowledge, already been addressed in the published literature. You demonstrate that you have chosen this direction through your own reasoning rather than simply restating the article's suggestions, and you can articulate why this direction over alternatives.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">Significance & Relevance</td>
                    <td className="px-4 py-3 border-r border-slate-200">20%</td>
                    <td className="px-4 py-3">A compelling, specific argument for why this research matters. Articulates both the scientific contribution and broader relevance (health, education, society, or policy) with reasoning rather than assertion. Draws effectively on additional peer-reviewed literature to support the argument.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">Proposed Approach</td>
                    <td className="px-4 py-3 border-r border-slate-200">20%</td>
                    <td className="px-4 py-3">The general design is logically suited to the research question. Identifies an appropriate study type, target population, and key measures. Shows thoughtful consideration of how the question could realistically be investigated, without requiring detailed procedural or statistical specification.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-200">Expected Outcomes & Implications</td>
                    <td className="px-4 py-3 border-r border-slate-200">20%</td>
                    <td className="px-4 py-3">Thoughtful predictions with clear reasoning about what different outcomes would mean. Considers both supporting and nonsupporting results and their implications for the field. Demonstrates genuine understanding of the logic of hypothesis testing and the research process.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">What makes a strong gap (from Lab 4)</h4>
            <p className="text-slate-600 text-sm mb-4">A gap that could be lifted off your article and pasted onto any other paper is too generic to score well on Originality or Connection. Specificity is the strongest lever in the marking. Two examples from Lab 4:</p>
            
            <div className="space-y-6 text-sm text-slate-600">
              <div>
                <strong className="text-slate-800 block mb-2">Population extension — weak vs. stronger</strong>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-red-700 block mb-1">Weak</strong>
                    <p className="italic mb-2">"The study only tested young adults. My study will test older adults to see if the effect holds."</p>
                    <p className="text-xs">Any paper has a sample limitation — this is not specific to your article. No engagement with the actual mechanism. The same pitch could be written from any paper on any topic.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-green-700 block mb-1">Stronger</strong>
                    <p className="italic mb-2">"The article shows effect X is driven by mechanism Y. Older adults have reduced Y, so the same paradigm should produce a diminished or absent effect — my study tests that prediction."</p>
                    <p className="text-xs">Population choice motivated by the article's specific mechanism. Directional hypothesis with reasoning. Informative whichever way the result falls.</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-slate-800 block mb-2">Method swap — weak vs. stronger</strong>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-red-700 block mb-1">Weak</strong>
                    <p className="italic mb-2">"The study used fMRI. My study will use EEG to look at the same brain regions."</p>
                    <p className="text-xs">Methodological mismatch — EEG cannot resolve deep or focal regions. No rationale for why the swap adds anything.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-green-700 block mb-1">Stronger</strong>
                    <p className="italic mb-2">"The fMRI findings identified a region active during retrieval but cannot resolve the time course. My study uses EEG with the same paradigm to test whether activity is predictive (at cue) or reactive (at retrieval onset)."</p>
                    <p className="text-xs">Method swap motivated by a specific limitation of the original. Adds a new dimension (temporal resolution) and generates competing, testable predictions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Starting point vs. new dimension</h4>
            <p className="text-slate-600 text-sm mb-4">You can start from the authors' suggested future directions — you cannot stop there. If the article ends with "future research should examine the neural correlates of this behavioural effect," a pitch that says "my study will use fMRI to examine the neural correlates" just parrots the suggestion. A stronger version might say:</p>
            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-sm italic text-slate-700 mb-4">
              "The 150 ms behavioural advantage points to early perceptual amplification rather than evaluative processing. My ERP study tests whether the effect appears in early P1 (~100 ms) or later LPP (~400 ms)."
            </div>
            <p className="text-slate-600 text-sm">Same starting point — but specifies what and why, and generates competing accounts you can argue between. Originality does not mean "from scratch." Using the article's suggested direction is fine. The bar is adding conceptual content the authors didn't.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Additional sources — every cited source must do work</h4>
            <p className="text-slate-600 text-sm mb-4">Minimum three peer-reviewed articles: your chosen article + two or more independently found. Cited is not the same as integrated. Each additional source should serve at least one of the following purposes:</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>Support significance:</strong> Demonstrates why the question matters (e.g. quantifies a clinical population your study would benefit). Used in Section 2.</li>
              <li><strong>Inform approach:</strong> Justifies the proposed method, paradigm, or design. Shows the approach has precedent. Used in Section 3.</li>
              <li><strong>Establish originality:</strong> Shows where the literature is now and what is not yet done. Delimits the gap. Used in Sections 1 or 2.</li>
              <li><strong>Ground expected outcomes:</strong> Anchors predictions in prior findings. Makes Section 4 reasoning concrete rather than speculative.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Checking originality</h4>
            <p className="text-slate-600 text-sm mb-4">Your assessor will run a brief literature search to check whether your proposed direction has already been published. You should do the same check first — on the specific version of your proposal, not the general topic area.</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-4">
              <li><strong>Google Scholar</strong> — combine 4–5 key terms from the specific proposal. Use "Cited by" for newer work.</li>
              <li><strong>Elicit</strong> — ask a natural-language question.</li>
              <li><strong>Connected Papers</strong> — paste your target article. Scan the graph for neighbours.</li>
              <li><strong>Semantic Scholar</strong> — useful for conceptually-related work.</li>
              <li><strong>PubMed</strong> — for biomedical or neuroscience-heavy proposals.</li>
            </ul>
            <p className="text-slate-600 text-sm mb-2"><strong>What to do with what you find:</strong></p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li><strong>Nothing closely related found</strong> → proceed. Cite at least one paper in the originality-check role anyway.</li>
              <li><strong>Similar question, different population/method/context</strong> → proceed but articulate the difference explicitly.</li>
              <li><strong>Essentially the same study exists</strong> → adjust direction. If very late in the process, acknowledge the existing work and explain how yours differs.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Academic integrity and use of AI</h4>
            <p className="text-slate-600 text-sm mb-4">This assessment should represent your own thinking and understanding. You may use AI tools (such as ChatGPT, Claude, etc.) to help you understand concepts, check your grammar, or explore ideas during preparation. However, your submitted pitch must reflect your own understanding and your own argument.</p>
            <p className="text-slate-600 text-sm font-medium">Remember: the pitch is worth 10%, but it is the foundation for the oral assessment worth 30%. Submitting work you do not deeply understand will undermine your performance in the oral.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Relationship to the oral assessment</h4>
            <p className="text-slate-600 text-sm">Your pitch is the primary artefact discussed during the Oral Assessment (30%, 5–12 June). During the oral, your tutor will begin with broader questions about the article and topic area, move into discussion of your pitch, and ask probing questions to explore the depth of your understanding. The oral is not a memory test; you are welcome to bring a copy of your pitch and the original article.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-slate-800 mb-3 border-b pb-2">Quick answers to common last-day questions</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <strong className="text-slate-800">Does the pitch need a hypothesis?</strong>
                <p>Yes — at least a directional prediction with reasoning. This usually lives in Section 4 (Expected Outcomes).</p>
              </div>
              <div>
                <strong className="text-slate-800">How detailed does my methods section need to be?</strong>
                <p>This is a conceptual pitch, not a methods paper. Describe your general approach clearly enough that a reader understands what kind of study you're proposing and why it's appropriate.</p>
              </div>
              <div>
                <strong className="text-slate-800">Can I propose a study using methods we haven't covered in class?</strong>
                <p>Yes, as long as you can explain in general terms what the method involves and why it suits your question.</p>
              </div>
              <div>
                <strong className="text-slate-800">Do I have to follow the future directions suggested in the article?</strong>
                <p>No. The article's suggestions are one possible starting point, but you may identify your own direction based on a limitation, gap, or question you noticed.</p>
              </div>
              <div>
                <strong className="text-slate-800">Can I combine two articles from the list?</strong>
                <p>No. One primary article from the list. You can (and should) cite additional peer-reviewed sources alongside it.</p>
              </div>
              <div>
                <strong className="text-slate-800">What counts as a peer-reviewed article?</strong>
                <p>Articles published in academic journals that use a peer review process. Not textbooks, websites, news articles, blog posts, or preprints.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <h4 className="font-semibold text-lg text-slate-800 mb-3">Final checklist before you submit</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> All four components clearly present.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> Word count between 720 and 880, excluding references.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> At least three peer-reviewed sources cited in consistent format.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> Originality check completed.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> Your gap is anchored in the article's actual mechanism or finding — not generic.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> At least one directional prediction with reasoning.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> Saved as Word document.</li>
              <li className="flex items-start gap-2"><div className="border border-slate-400 w-4 h-4 rounded-sm mt-0.5 flex-shrink-0"></div> Submitted via the Qualtrics portal: <a href="https://vuw.qualtrics.com/jfe/form/SV_6zJZLL8YOvLff9k" className="text-primary hover:underline" target="_blank" rel="noreferrer">Submit Here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">If you already submitted on Nuku</h3>
        <p className="text-slate-600">
          If you already submitted on Nuku before the outage, please also submit through the temporary portal if instructed. This allows tutors to begin marking while Nuku access is unavailable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Oral Assessment</h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            The Oral Assessment will assess your ability to explain, discuss, and defend your research direction. The Proposal Pitch is intended to help you prepare for this interactive oral assessment.
          </p>
          <div className="flex flex-col gap-2">
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
              <FileText size={16} /> View Oral Assessment guide
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
              <FileText size={16} /> View preparation resources
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Tests</h3>
            <p className="text-slate-600 text-sm">
              Please continue checking your university email and this page for any updates about test arrangements while Nuku is unavailable.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Lab Tasks</h3>
            <p className="text-slate-600 text-sm">
              Lab tasks remain part of the course assessment structure. Please check the weekly materials and announcements for any updates about lab-related information.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-8 mt-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Assessment Support</h3>
        <p className="text-slate-600 mb-4">If you are unsure about a general assessment instruction, please first check:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-6 pl-2">
          <li>This page.</li>
          <li>The FAQ / Support page.</li>
          <li>Your university email.</li>
        </ol>
        <p className="text-slate-600 bg-slate-100 p-4 rounded-md">
          For individual circumstances, please contact the course team using your university email.
        </p>
      </div>
    </div>
  );
};

export default Assessments;
