# TaiwanLegalAi SDK utility: make_context

from core.context import TaiwanLegalAiContext


def make_context_util(ctxmap, basectx):
    return TaiwanLegalAiContext(ctxmap, basectx)
