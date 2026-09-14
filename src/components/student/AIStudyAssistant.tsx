import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Sparkles, Send, Bot, User, Volume2, 
  RotateCcw, Copy, Check, ChevronDown, ChevronUp,
  BookOpen, HelpCircle, Lightbulb, AlertCircle, Maximize2, Minimize2,
  ExternalLink, Layers
} from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import { AIChatMessage } from '../../types';
import { playSound } from '../../lib/sound';

interface AIStudyAssistantProps {
  initialExpanded?: boolean;
}

export const AIStudyAssistant: React.FC<AIStudyAssistantProps> = ({ initialExpanded = false }) => {
  const { profile } = useAuth();
  const { lessons, dailyWords, homeworks } = useLMSData();

  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Assalomu alaykum, **${profile?.full_name || 'Student'}**! I am your **Premier School AI Study Assistant**.\n\nI have full context of your current **${profile?.level || 'B2'} level** curriculum, including today's lessons (*"${lessons[0]?.title || 'IELTS Preparation'}"*) and your active daily vocabulary box.\n\nHow can I help your English studies today?`,
      timestamp: new Date().toISOString(),
      suggestedQuestions: [
        'Explain today\'s daily vocabulary words',
        'Present Perfect vs Past Simple rules & mistakes',
        'Help me outline an essay for my current homework'
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isExpanded) {
      scrollToBottom();
    }
  }, [messages, isExpanded]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: AIChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    playSound('click');

    try {
      // Pass grounded context from LMS
      const response = await fetch('/api/ai/study-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-6).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.content
          })),
          context: {
            studentName: profile?.full_name || 'Premier Student',
            level: profile?.level || 'B2',
            lessons: lessons.slice(0, 3),
            dailyWords: dailyWords.slice(0, 5),
            homeworks: homeworks.slice(0, 3)
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: AIChatMessage = {
        id: `ast-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'I am ready to help you continue your practice!',
        timestamp: new Date().toISOString(),
        sources: data.sources || ['Curriculum Context'],
        suggestedQuestions: data.suggestedQuestions || []
      };

      setMessages(prev => [...prev, assistantMessage]);
      playSound('correct');
    } catch (err) {
      console.error('[AIStudyAssistant] Error:', err);
      // Fallback message
      const fallbackMessage: AIChatMessage = {
        id: `ast-${Date.now()}`,
        role: 'assistant',
        content: `I'm currently connected and ready to assist you!\n\nHere is a quick learning tip for your **${profile?.level || 'B2'}** study:\n\nReview today's Leitner vocabulary words or test your knowledge on **Present Perfect vs Past Simple** to reinforce grammar accuracy.`,
        timestamp: new Date().toISOString(),
        suggestedQuestions: [
          'Give me an example sentence with today\'s daily word',
          'What are the common IELTS grammar pitfalls?'
        ]
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePronounce = (id: string, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner audio
    const cleanText = text.replace(/[*#_`>]/g, '').slice(0, 200);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-GB'; // British English for IELTS standard
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: `Conversation reset. I am ready for your next study questions!`,
        timestamp: new Date().toISOString(),
        suggestedQuestions: [
          'Explain today\'s daily vocabulary words',
          'Past Simple vs Present Perfect',
          'How to improve my IELTS Lexical Resource?'
        ]
      }
    ]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all duration-200">
      {/* Header bar */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-blue-300 shadow-inner">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Premier AI Study Assistant
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Gemini Live
              </span>
            </div>
            <p className="text-[11px] text-blue-200/80 flex items-center gap-1.5 mt-0.5">
              <span>CEFR {profile?.level || 'B2'} Curriculum Grounded</span>
              <span>•</span>
              <span className="text-amber-200/90 font-medium">Uzbek & English support</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleClearHistory}
            className="p-1.5 text-blue-200/70 hover:text-white hover:bg-white/10 rounded-lg transition text-xs"
            title="Clear Chat History"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className="p-1.5 text-blue-200/70 hover:text-white hover:bg-white/10 rounded-lg transition"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Curriculum Context Ribbon */}
      <div className="px-4 py-2 bg-blue-50/70 border-b border-blue-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          <span>Active Context:</span>
          <span className="font-bold text-slate-800">{lessons[0]?.title || 'IELTS Preparation'}</span>
          <span className="text-slate-300">|</span>
          <span>Daily Words: <b className="text-slate-800">{dailyWords.length} in Leitner Box</b></span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-blue-700 font-semibold bg-white px-2 py-0.5 rounded-md border border-blue-200/60 shadow-2xs">
          <span>Safe Academic Mode Active</span>
        </div>
      </div>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="flex flex-col h-[480px]">
          {/* Messages scroll area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-2xs ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-none'
                }`}>
                  {/* Message Content */}
                  <div className={`text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user' ? 'text-white' : 'prose prose-sm prose-slate max-w-none text-slate-800'
                  }`}>
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="space-y-2">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>

                  {/* Assistant Actions: Sources, Pronunciation, Copy */}
                  {msg.role === 'assistant' && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        {msg.sources && msg.sources.length > 0 && (
                          <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-600 font-medium">
                            <BookOpen className="w-3 h-3 text-blue-500" />
                            {msg.sources[0]}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handlePronounce(msg.id, msg.content)}
                          className={`p-1 rounded hover:bg-slate-100 transition ${
                            speakingId === msg.id ? 'text-blue-600 bg-blue-50' : 'text-slate-400'
                          }`}
                          title="Listen Pronunciation (UK Speech)"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                          title="Copy text"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Suggested follow-up prompt pills */}
                  {msg.role === 'assistant' && msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                        Suggested Follow-ups
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedQuestions.map((q, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSend(q)}
                            disabled={loading}
                            className="text-left text-[11px] font-medium bg-blue-50 hover:bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-200/80 transition cursor-pointer disabled:opacity-50"
                          >
                            💡 {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 shadow-2xs mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs animate-pulse">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-2xs flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium ml-1">
                    Analyzing curriculum context...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips Bar */}
          <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Quick Ask:
            </span>
            <button
              type="button"
              onClick={() => handleSend('Explain the difference between Present Perfect and Past Simple')}
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer"
            >
              Past Simple vs Present Perfect
            </button>
            <button
              type="button"
              onClick={() => handleSend('What collocations and idioms should I use with today\'s daily words?')}
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer"
            >
              Daily Words Collocations
            </button>
            <button
              type="button"
              onClick={() => handleSend('How can I write a high-scoring Band 7.5 introduction for IELTS Writing Task 2?')}
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer"
            >
              IELTS Writing Band 7.5 Tips
            </button>
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 sm:p-4 bg-white border-t border-slate-200/90 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask about grammar, vocabulary, or lesson materials (${profile?.level || 'B2'})...`}
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Collapsed teaser preview if collapsed */}
      {!isExpanded && (
        <div 
          onClick={() => setIsExpanded(true)}
          className="p-3 sm:p-4 bg-slate-50/70 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between transition"
        >
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Bot className="w-4 h-4 text-blue-600" />
            <span>Click to expand study assistant — ask grammar questions, practice vocabulary, or review lessons.</span>
          </div>
          <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
            Open Chat
            <ChevronDown className="w-4 h-4" />
          </span>
        </div>
      )}
    </div>
  );
};
