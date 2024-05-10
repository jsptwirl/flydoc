---
title: ArrayCtrl 数组型控件
date: 2020-05-09T17:29:26
---

# ArrayCtrl 数组型控件

---

指像List、Table之类的由数组型数据驱动显示的控件

数组型控件的相关flycode主要分为一下几类：

### 数据获取

> \-

## 数据设置

### 多个分组的数组型控件

* reloadData(data, setter) 重新设置全部数据
* insertData(data, setter, indexPaths) 插入多条数据到指定的indexPath

* updateData(data, setter, indexPaths) 更新多条数据到指定的indexPath

### 单个分组的数组型控件

#### 设置数据

* reload(rowsData, setter) 重新设置全部数据

* insert(rowsData, indexes, setter) 插入多条数据到指定的index

* append(rowsData, head/tail, setter) 插入多条数据到头部或者尾部

* update(rowsData, indexes, setter) 更新多条数据到指定的index

* delete(indexes) 删除指定位置的行

* deleteInScope(all/checked/focus/modified) 删除指定范围内的数据

* deleteInScopeReverse(all/checked/focus/modified) 删除指定范围外的数据

#### 获取数据

* getInScope(all/checked/focus/modified) 获取指定范围内的数据

* getInScopeReverse(all/checked/focus/modified) 获取指定范围外的数据

#### 控件操作

* setLoadStatus(statusType) 手动设置控件的加载状态