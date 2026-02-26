import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ThumbsUp, Calendar } from 'lucide-react';
import type { Comment } from '../api';

interface CommentBrowserProps {
  comments: Comment[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function CommentBrowser({ comments }: CommentBrowserProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75 }}
      className="glass-card p-8 mb-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Comment Browser</h3>
          <p className="text-xs text-slate-500">{comments.length} comments</p>
        </div>
      </div>

      {/* Scrollable Comment List */}
      <div className="max-h-[420px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
        <AnimatePresence mode="popLayout">
          {comments.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 text-slate-500"
            >
              <MessageSquare className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No comments to display.</p>
            </motion.div>
          ) : (
            comments.map((comment, i) => {
              return (
                <motion.div
                  key={comment.commentId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    {/* Author */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white/70">
                        {comment.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-200 truncate">{comment.author}</span>
                        </div>
                      </div>
                    </div>

                    {/* Like count */}
                    <div className="flex items-center gap-1 text-slate-500 flex-shrink-0">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{comment.likeCount}</span>
                    </div>
                  </div>

                  {/* Comment text */}
                  <p className="text-sm text-slate-300 leading-relaxed pl-11 mb-2">
                    {comment.text}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-slate-600 pl-11">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[11px] font-medium">{formatDate(comment.publishedAt)}</span>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Custom Scrollbar Styles (inline) */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
      `}</style>
    </motion.section>
  );
}
